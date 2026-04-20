import { useEffect } from 'react';

type Source = {
  file: string;
  startLine: number;
  startColumn: number;
  endLine: number;
  endColumn: number;
} | null;

type ElementData = {
  component: string | null;
  props: Record<string, string> | null;
  source: Source;
  element: { tag: string; id?: string };
  parentComponent: string | null;
  selectorPath: string;
  computedStyles: Record<string, string>;
  textContent?: string;
  rect: { x: number; y: number; width: number; height: number };
} | null;

type Fiber = {
  type?:
    | string
    | { name?: string; displayName?: string }
    | ((...args: unknown[]) => unknown);
  return?: Fiber;
  memoizedProps?: Record<string, unknown>;
};

const FILTERED_PROPS = new Set([
  'className',
  'class',
  'style',
  'ref',
  'children',
  'key',
  'dangerouslySetInnerHTML',
]);
const MAX_PROP_LENGTH = 50;

function getReactFiber(el: HTMLElement): Fiber | null {
  const key = Object.keys(el).find((k) => k.startsWith('__reactFiber$'));
  return key ? ((el as unknown as Record<string, Fiber>)[key] ?? null) : null;
}

function getComponentNameFromFiber(fiber: Fiber | null): string | null {
  if (!fiber) return null;
  const type = fiber.type;
  if (typeof type === 'function' && 'name' in type && type.name) return type.name;
  if (typeof type === 'object' && type !== null) {
    if ('displayName' in type && type.displayName) return type.displayName;
    if ('name' in type && type.name) return type.name;
  }
  return null;
}

function getComponentName(el: HTMLElement): string | null {
  let fiber: Fiber | null | undefined = getReactFiber(el);
  while (fiber) {
    const name = getComponentNameFromFiber(fiber);
    if (name) return name;
    fiber = fiber.return;
  }
  return null;
}

function getParentComponentName(el: HTMLElement): string | null {
  let fiber: Fiber | null | undefined = getReactFiber(el);
  let foundFirst = false;
  while (fiber) {
    const name = getComponentNameFromFiber(fiber);
    if (name) {
      if (foundFirst) return name;
      foundFirst = true;
    }
    fiber = fiber.return;
  }
  return null;
}

function getComponentPropsFromFiber(el: HTMLElement): Record<string, unknown> | null {
  let fiber: Fiber | null | undefined = getReactFiber(el);
  while (fiber) {
    const name = getComponentNameFromFiber(fiber);
    if (name && fiber.memoizedProps) return fiber.memoizedProps;
    fiber = fiber.return;
  }
  return null;
}

function shouldFilterProp(key: string, value: unknown): boolean {
  if (key.startsWith('__')) return true;
  if (key.startsWith('data-')) return true;
  if (FILTERED_PROPS.has(key)) return true;
  if (typeof value === 'string' && value.length > MAX_PROP_LENGTH) return true;
  return false;
}

function serializeProps(props: Record<string, unknown>): Record<string, string> | null {
  const result: Record<string, string> = {};
  for (const [key, value] of Object.entries(props)) {
    if (shouldFilterProp(key, value)) continue;
    if (value === undefined) continue;
    if (typeof value === 'function') result[key] = '[Function]';
    else if (value instanceof HTMLElement) result[key] = '[Element]';
    else if (typeof value === 'object' && value !== null) result[key] = '[Object]';
    else if (typeof value === 'boolean') result[key] = value ? 'true' : 'false';
    else result[key] = String(value);
  }
  return Object.keys(result).length > 0 ? result : null;
}

function getStyles(el: HTMLElement): Record<string, string> {
  const c = window.getComputedStyle(el);
  return {
    color: c.color,
    backgroundColor: c.backgroundColor,
    fontSize: c.fontSize,
    fontFamily: c.fontFamily,
    display: c.display,
    position: c.position,
  };
}

function generateSelectorPath(el: HTMLElement): string {
  const path: string[] = [];
  let current: HTMLElement | null = el;
  while (current && current.nodeType === Node.ELEMENT_NODE && current !== document.body) {
    let selector = current.tagName.toLowerCase();
    if (current.id) {
      selector = `#${current.id}`;
      path.unshift(selector);
      break;
    }
    const parent = current.parentElement;
    if (parent) {
      const siblings = Array.from(parent.children);
      const index = siblings.indexOf(current) + 1;
      selector += `:nth-child(${index})`;
    }
    path.unshift(selector);
    current = current.parentElement;
  }
  return path.join(' > ');
}

function parseSource(el: HTMLElement | null): Source {
  if (!el) return null;
  const file = el.getAttribute('data-component-file');
  const start = el.getAttribute('data-component-start');
  const end = el.getAttribute('data-component-end');
  if (!file || !start || !end) return null;
  const [startLine, startColumn] = start.split(':').map(Number);
  const [endLine, endColumn] = end.split(':').map(Number);
  return { file, startLine, startColumn, endLine, endColumn };
}

function getTextContent(el: HTMLElement): string | undefined {
  const text = el.textContent?.trim();
  if (!text) return undefined;
  return text.length > 200 ? text.slice(0, 200) : text;
}

function extractElementData(target: HTMLElement): NonNullable<ElementData> {
  const componentElement = target.closest('[data-component-file]') as HTMLElement | null;
  const elementToInspect = componentElement || target;
  const componentProps = getComponentPropsFromFiber(elementToInspect);
  const rect = elementToInspect.getBoundingClientRect();
  return {
    component: getComponentName(elementToInspect),
    props: componentProps ? serializeProps(componentProps) : null,
    source: parseSource(componentElement),
    element: {
      tag: elementToInspect.tagName.toLowerCase(),
      id: elementToInspect.id || undefined,
    },
    parentComponent: getParentComponentName(elementToInspect),
    selectorPath: generateSelectorPath(elementToInspect),
    computedStyles: getStyles(elementToInspect),
    textContent: getTextContent(elementToInspect),
    rect: {
      x: rect.left,
      y: rect.top,
      width: rect.width,
      height: rect.height,
    },
  };
}

export function ElementInspector() {
  useEffect(() => {
    if (window.self === window.top) return;

    const handleMessage = (event: MessageEvent) => {
      if (event.data?.type === 'parent-mouse-position') {
        const { x, y } = event.data;
        const element = document.elementFromPoint(x, y);
        if (element) {
          const elementData = extractElementData(element as HTMLElement);
          window.parent.postMessage(
            { type: 'iframe-element-at-position', element: elementData },
            '*',
          );
        } else {
          window.parent.postMessage(
            { type: 'iframe-element-at-position', element: null },
            '*',
          );
        }
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return null;
}
