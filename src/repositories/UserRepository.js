import { Repository, createRepository } from './Base/Repository'

class UserRepository extends Repository {
    endpoint = 'users'

}

export default new UserRepository()

export const create = createRepository(UserRepository)