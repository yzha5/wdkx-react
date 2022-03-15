import { Component } from 'react'
import { ModalProps } from './types'
import { StyledBackPanel, StyledModalRoot } from './styled'
import { createPortal } from 'react-dom'

type State = { show: boolean }
export default class Modal extends Component<ModalProps, State> {
    constructor(props: ModalProps) {
        super(props)
        this.state = {
            show: this.props.show || false,
        }
    }

    static getDerivedStateFromProps(
        nextProps: Readonly<ModalProps>,
        prevState: Readonly<State>
    ) {
        if (nextProps.show) {
            document.documentElement.style.overflow = 'hidden'
            return {
                show: true,
            }
        } else {
            document.documentElement.style.removeProperty('overflow')
            return { show: false }
        }
    }
    componentWillUnmount() {
        document.documentElement.style.removeProperty('overflow')
    }
    render() {
        const { onBlankClick, panel, children, ...rest } = this.props
        return (
            <>
                {children}
                {this.state.show &&
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
