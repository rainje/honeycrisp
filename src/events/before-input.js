const BeforeInputEvent = (input, options) => {

  if (options['inputType'] == 'letters') {
    input.addEventListener('beforeinput', (event) => {
      if (!/[a-zA-Z]/.test(input)) {
        event.preventDefault()
        return
      }
    })
  } else {
    input.addEventListener('beforeinput', (event) => {
      const isNumeric = n => !isNaN(n);

      if (!isNumeric(event.data)) {
        event.preventDefault()
        return
      }
    })
  }
}

export default BeforeInputEvent
