import Backplate from '../backplate'
import { DocumentWH, PopupProps } from './types'
import { StyledPopupContent } from './styled'
import { Component, createRef, RefObject } from 'react'

type State = {
    resRect?: DOMRect
    contentRect?: DOMRect
    docRect?: DocumentWH

    // Add refs into state
    resRef: RefObject<HTMLDivElement>
    contentRef: RefObject<HTMLDivElement>
}

export default class Popup extends Component<PopupProps, State> {
    constructor(props: PopupProps) {
        super(props)
        this.state = {
            resRect: undefined,
            contentRect: undefined,
            docRect: undefined,
            resRef: createRef<HTMLDivElement>(),
            contentRef: createRef<HTMLDivElement>(),
        }
    }

    static getDerivedStateFromProps(
        nextProps: Readonly<PopupProps>,
        prevState: Readonly<State>
    ) {
        return nextProps.show
            ? {
                  resRect: prevState.resRef.current
                      ? prevState.resRef.current.getBoundingClientRect()
                      : undefined,
                  contentRect: prevState.contentRef.current
                      ? prevState.contentRef.current.getBoundingClientRect()
                      : undefined,
                  docRect: {
                      width: document.documentElement.clientWidth,
                      height: document.documentElement.clientHeight,
                  },
              }
            : {}
    }

    shouldComponentUpdate(
        nextProps: Readonly<PopupProps>,
        nextState: Readonly<State>,
        nextContext: any
    ): boolean {
        if (nextProps.show && nextState.contentRect === undefined) {
            this.setState({
                contentRect: nextState.contentRef.current
                    ? nextState.contentRef.current.getBoundingClientRect()
                    : undefined,
            })
            return true
        }
        return true
    }

    render() {
        let { backplateProps, popupContent, show, align, children } = this.props

        return (
            <div>
                <div ref={this.state.resRef}>{children}</div>
                {show && (
                    <Backplate {...backplateProps}>
                        <StyledPopupContent
                            align={align}
                            residentRect={this.state.resRect}
                            contentRect={this.state.contentRect}
                            documentRect={this.state.docRect}
                            ref={this.state.contentRef}
                        >
                            {popupContent}
                        </StyledPopupContent>
                    </Backplate>
                )}
            </div>
        )
    }
}
