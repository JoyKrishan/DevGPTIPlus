const autobind = (object, self) => {
    const functions = Object.getOwnPropertyNames(object.prototype).filter((f) =>
        f.includes("handle")
    )
    functions.forEach((f) => {
        self[f] = self[f].bind(self)
    })
}

export const addToggle = (object, self, name, defaultValue = false) => {
    const handlerName = `open${name.charAt(0).toUpperCase() + name.slice(1)}`
    const newState = { ...self.state }
    newState[handlerName] = defaultValue
    self.state = newState

    object.prototype[`handle${handlerName.charAt(0).toUpperCase() + handlerName.slice(1)}`] = () => {
        const booleanValue = self.state[handlerName]
        self.setState({ [handlerName]: !booleanValue })
    }
}

export const addChange = (object, self) => {
    object.prototype.handleChange = (event) => {
        const { params } = self.state
        const { target: { value, name } } = event
        params[name] = value
        self.setState({ params })
    }
}

export default autobind