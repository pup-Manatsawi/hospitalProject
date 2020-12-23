import  State1stRole from '../containers/pages/State_1st_role/State_1st_role'

const components = {
    state1stRole: {
        path: "/state1stRole",
        page: State1stRole
      },
      secondState: {
        path: "/secondState",
        page: SecondState
      },
};

const roles = {
    GUEST: [
      components.state1stRole,
      components.secondState
    ],
    USER: [
      
    ]
  }
  
  export default roles;