import React, { useState, useLayoutEffect, useRef } from 'react'

import { chatStore } from '../store/chatStore'

export const FirstPerson = () => {
  const [state, setState] = useState(chatStore.initialState)
  const inptRef = useRef()

  useLayoutEffect(() => {
    chatStore.subscribe(setState)
    chatStore.init()
  }, [])

  const onFormSubmit = (e) => {
    e.preventDefault()
    const message = {
      person: 'first-person',
      text: inptRef.current.value,
    }

    chatStore.sendMessage(message)
    document.getElementById('messageForm').reset()
  }

  return (
    <div className='container'>
      <h2>Mycroft</h2>
      <div className='chat-box'>
        {state.data.map((message) => (
          <div>
            <p className={message.person}>{message.text}</p>
            <div className='clear'></div>
          </div>
        ))}
      </div>
      <form id='messageForm' onSubmit={onFormSubmit}>
        <input
          ref={inptRef}
          type='text'
          id='messageInput'
          name='messageInput'
          placeholder='type here...'
          required
        />
        <button type='submit'>Send</button> <br />
      </form>
      <button className='clear-button' onClick={() => chatStore.clearChat()}>
        Clear Chat
      </button>
    </div>
  )
}
