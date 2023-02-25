// Variable determining chapter of Source is contained in this file.

import { Context, Environment, Variant } from './types'

export class LazyBuiltIn {
  func: (...arg0: any) => any
  evaluateArgs: boolean
  constructor(func: (...arg0: any) => any, evaluateArgs: boolean) {
    this.func = func
    this.evaluateArgs = evaluateArgs
  }
}

export class EnvTree {
  private _root: EnvTreeNode | null = null
  private map = new Map<Environment, EnvTreeNode>()

  get root(): EnvTreeNode | null {
    return this._root
  }

  public insert(environment: Environment): void {
    const tailEnvironment = environment.tail
    if (tailEnvironment === null) {
      if (this._root === null) {
        this._root = new EnvTreeNode(environment, null)
        this.map.set(environment, this._root)
      }
    } else {
      const parentNode = this.map.get(tailEnvironment)
      if (parentNode) {
        const childNode = new EnvTreeNode(environment, parentNode)
        parentNode.addChild(childNode)
        this.map.set(environment, childNode)
      }
    }
  }

  public getTreeNode(environment: Environment): EnvTreeNode | undefined {
    return this.map.get(environment)
  }
}

export class EnvTreeNode {
  private _children: EnvTreeNode[] = []

  constructor(readonly environment: Environment, public parent: EnvTreeNode | null) {}

  get children(): EnvTreeNode[] {
    return this._children
  }

  public resetChildren(newChildren: EnvTreeNode[]): void {
    this.clearChildren()
    this.addChildren(newChildren)
    newChildren.forEach(c => (c.parent = this))
  }

  private clearChildren(): void {
    this._children = []
  }

  private addChildren(newChildren: EnvTreeNode[]): void {
    this._children.push(...newChildren)
  }

  public addChild(newChild: EnvTreeNode): EnvTreeNode {
    this._children.push(newChild)
    return newChild
  }
}

const createEmptyRuntime = () => ({
  break: false,
  debuggerOn: true,
  isRunning: false,
  environmentTree: new EnvTree(),
  environments: [],
  value: undefined,
  nodes: []
})

export const createGlobalEnvironment = (): Environment => ({
  tail: null,
  name: 'global',
  head: {},
  id: '-1'
})

export const createEmptyContext = <T>(
  variant: Variant,
  externalSymbols: string[],
  externalContext?: T
): Context<T> => {
  return {
    externalSymbols,
    errors: [],
    externalContext,
    runtime: createEmptyRuntime(),
    numberOfOuterEnvironments: 1,
    prelude: null,
    executionMethod: 'auto',
    variant,
    moduleContexts: {},
    unTypecheckedCode: [],
    previousCode: []
  }
}

export const ensureGlobalEnvironmentExist = (context: Context) => {
  if (!context.runtime) {
    context.runtime = createEmptyRuntime()
  }
  if (!context.runtime.environments) {
    context.runtime.environments = []
  }
  if (!context.runtime.environmentTree) {
    context.runtime.environmentTree = new EnvTree()
  }
  if (context.runtime.environments.length === 0) {
    const globalEnvironment = createGlobalEnvironment()
    context.runtime.environments.push(globalEnvironment)
    context.runtime.environmentTree.insert(globalEnvironment)
  }
}

const createContext = <T>(
  variant: Variant = Variant.DEFAULT,
  externalSymbols: string[] = [],
  externalContext?: T
): Context => {
  const context = createEmptyContext(variant, externalSymbols, externalContext)

  return context
}

export default createContext
