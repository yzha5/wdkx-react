import styled from '@emotion/styled'
import { ComponentColor } from '@wdkx/types-react'
import { NewColor } from '@wdkx/theme-react'

export const StyledElement = styled.div({
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
})
export const FieldMessage = styled.div<{
    color?: ComponentColor
    disabled?: boolean
}>(({ color, disabled, theme }) => {
    const uiColor = NewColor(color, theme)
    return {
        label: 'field-message',
        fontSize: '0.75rem',
        color: disabled ? theme.palette.disabled.text : uiColor.toString(),
    }
})
