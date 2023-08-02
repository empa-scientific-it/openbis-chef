import dto from './dto'
import Facade from './api'

class Openbis {
    initialized: boolean
    dto: any
    api: Facade
  constructor() {
    this.initialized = false
  }
  async init() {
    if (!this.initialized) {
      await Promise.all([dto._init(), this.api._init()])
      Object.assign(this, dto)
      Object.assign(this, this.api)
      this.initialized = true
    }
  }
}

const openbis = new Openbis()
export default openbis
