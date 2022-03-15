import { Component } from 'react'
import { ModalProps } from './types'
import { StyledBackPanel, StyledModalRoot } from './styled'
import { createPortal } from 'react-dom'

type State = {}
export default class Modal extends Component<ModalProps, State> {
    constructor(props: ModalProps) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        document.documentElement.style.overflow = 'hidden'
    }

    render() {
        const { show, onBlankClick, panel, children, ...rest } = this.props
        return (
            <>
                {children}
                {show &&
                    createPortal(
                        <StyledModalRoot {...rest}>
                            {panel}
                            <StyledBackPanel onClick={onBlankClick} />
                        </StyledModalRoot>,
                        document.body
                    )}
            </>
        )
    }
}
