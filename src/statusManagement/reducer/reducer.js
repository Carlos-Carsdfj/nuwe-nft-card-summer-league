import { TYPES } from './type'


const  user ={
  name:'carsdfj',
  global_position:45,
  participation:[
    {
      title:'Hackathons',
      p:12,
      id:1
    }, 
    {
      title:'Challenges',
      p:56,
      id:2
    },
    {
      title:'Proyectos OS',
      p:3,
      id:3
    },
    {
      title:'Emblemas',
      p:78,
      id:4
    }
  ],
  rank:'Creator||',
  spain_rank:1,
  general_europe:157,
  stack_stop: [
    {
      subject: 'Javascrip',
      score: 120,
      fullMark: 150,
    },
    {
      subject: 'Java',
      score: 98,
      fullMark: 150,
    },
    {
      subject: 'Reactjs',
      score: 86,
      fullMark: 150,
    },
    {
      subject: 'Kotlin',
      score: 99,
      fullMark: 150,
    },
    {
      subject: 'Nodejs',
      score: 85,
      fullMark: 150,
    },
  ],
  title:'Web dev',
  avatar:'carsdfj'
}

export const reducer =( state=user, action )=>{
  
  switch(action.type){
  case TYPES.CHANGE_AVATAR:
    return {
      ... state,
      avatar:action.payload
    }
  default:
    return state
  }
}
