import { Subject } from 'rxjs'

const subject = new Subject()

const initialState = {
  data: [],
  counter: 0,
}

let state = initialState

export const chatStore = {
  init: () => {
    state = { ...state, count: 0 }
    subject.next(state)
  },
  subscribe: (setState) => subject.subscribe(setState),
  sendMessage: (message) => {
    state = {
      ...state,
      data: [...state.data, message],
      count: state.count + 1,
    }
    subject.next(state)
  },
  clearChat: () => {
    state = initialState
    subject.next(state)
  },
  initialState,
}
