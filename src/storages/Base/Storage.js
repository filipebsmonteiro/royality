import {Repository} from '../../repositories/Base/Repository'
import makeState from './State'
import makeGetters from './Getters'
import makeMutations from './Mutations'
import makeActions from './Actions'

export default function makeStore(name, repository, namespaced = true) {
    if (!(repository instanceof Repository)) {
        throw new Error('storages/Base/Store@makeStore param 2 should be instance of repositories/Repository')
    }
    return {
        name,
        namespaced,
        state: makeState(),
        getters: makeGetters(),
        mutations: makeMutations(),
        actions: makeActions(repository)
    }
}