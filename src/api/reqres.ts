import freeReq from "@/axios/request1"

interface FreeReqApi {
    userList: Function,
}
const freeReqApi: FreeReqApi  = {
    userList(params: object){
        return freeReq.get('users', params )
    }
}

export default freeReqApi
