import VuexORM from '@vuex-orm/core'
import Product from '@/models/product'

const database = new VuexORM.Database()

// Register Models to Database.
database.register(Product)

export const plugins = [VuexORM.install(database)]