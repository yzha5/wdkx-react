import { Dispatch, useState } from 'react'
import {
    ComponentColor,
    ComponentMode,
    ComponentRadius,
    ComponentSize,
} from '@wdkx/types-react'
import { Input } from './input'
import { Switch } from '@wdkx/component-react'

type Bool = {
    value: boolean
    setStateAction: Dispatch<boolean>
    component: JSX.Element
}

interface PropsControlItem {
    color: {
        value: ComponentColor | undefined
        setStateAction: Dispatch<ComponentColor | undefined>
        component: JSX.Element
    }
    size: {
        value: ComponentSize | undefined
        setStateAction: Dispatch<ComponentSize>
        component: JSX.Element
    }
    radius: {
        value: ComponentRadius
        setStateAction: Dispatch<ComponentRadius>
        component: JSX.Element
    }
    mode: {
        value: ComponentMode | undefined
        setStateAction: Dispatch<ComponentMode | undefined>
        component: JSX.Element
    }
    alpha: {
        value: number | undefined
        setStateAction: Dispatch<number | undefined>
        component: JSX.Element
    }
    light: Bool
    fluid: Bool
    icon: Bool
    shadowed: Bool
    frosted: Bool
    selected: Bool
    disabled: Bool
}

export function PropsController(): PropsControlItem {
    const [color, setColor] = useState<ComponentColor | undefined>(undefined)
    const [radius, setRadius] = useState<ComponentRadius>(undefined)
    const [size, setSize] = useState<ComponentSize | undefined>(undefined)
    const [mode, setMode] = useState<ComponentMode | undefined>(undefined)
    const [alpha, setAlpha] = useState<number | undefined>(undefined)
    const [light, setLight] = useState(false)
    const [fluid, setFluid] = useState(false)
    const [icon, setIcon] = useState(false)
    const [shadowed, setShadowed] = useState(false)
    const [frosted, setFrosted] = useState(false)
    const [selected, setSelected] = useState(false)
    const [disabled, setDisabled] = useState(false)

    return {
        color: {
            value: color,
            setStateAction: setColor,
            component: (
                <tr key='color'>
                    <td>color</td>
                    <td>
                        <Input
                            list='color-list'
                            fluid
                            onChange={(e) =>
                                setColor(
                                    e.target.value === ''
                                        ? undefined
                                        : (e.target.value as ComponentColor)
                                )
                            }
                        />
                        <datalist id='color-list'>
                            <option value='primary'>primary</option>
                            <option value='secondary'>secondary</option>
                            <option value='info'>info</option>
                            <option value='success'>success</option>
                            <option value='warn'>warn</option>
                            <option value='error'>error</option>
                        </datalist>
                    </td>
                </tr>
            ),
        },
        size: {
            value: size,
            setStateAction: setSize,
            component: (
                <tr key='size'>
                    <td>size</td>
                    <td>
                        <Input
                            list='size-list'
                            fluid
                            onChange={(e) =>
                                setSize(() => {
                                    const v = e.target.value
                                    switch (v) {
                                        case '':
                                            return undefined
                                        case 'xs':
                                            return 'xs'
                                        case 'sm':
                                            return 'sm'
                                        case 'md':
                                            return 'md'
                                        case 'lg':
                                            return 'lg'
                                        case 'xl':
                                            return 'xl'
                                        default:
                                            return Number(v)
                                    }
                                })
                            }
                        />
                        <datalist id='size-list'>
                            <option value='xs'>xs</option>
                            <option value='sm'>sm</option>
                            <option value='md'>md</option>
                            <option value='lg'>lg</option>
                            <option value='xl'>xl</option>
                        </datalist>
                    </td>
                </tr>
            ),
        },
        radius: {
            value: radius,
            setStateAction: setRadius,
            component: (
                <tr key='radius'>
                    <td>radius</td>
                    <td>
                        <Input
                            list='radius-list'
                            fluid
                            onChange={(e) =>
                                setRadius(() => {
                                    const v = e.target.value
                                    switch (v) {
                                        case '':
                                            return undefined
                                        case 'bit':
                                            return 'bit'
                                        case 'more':
                                            return 'more'
                                        case 'full':
                                            return 'full'
                                        default:
                                            return isNaN(Number(v))
                                                ? undefined
                                                : Number(v)
                                    }
                                })
                            }
                        />
                        <datalist id='radius-list'>
                            <option value='bit'>bit</option>
                            <option value='more'>more</option>
                            <option value='full'>full</option>
                        </datalist>
                    </td>
                </tr>
            ),
        },
        mode: {
            value: mode,
            setStateAction: setMode,
            component: (
                <tr key='mode'>
                    <td>mode</td>
                    <td>
                        <Input
                            list='mode-list'
                            fluid
                            onChange={(e) =>
                                setMode(e.target.value as ComponentMode)
                            }
                        />
                        <datalist id='mode-list'>
                            <option value='filled'>filled</option>
                            <option value='outlined'>outlined</option>
                            <option value='ghost'>ghost</option>
                        </datalist>
                    </td>
                </tr>
            ),
        },
        alpha: {
            value: alpha,
            setStateAction: setAlpha,
            component: (
                <tr key='alpha'>
                    <td>alpha</td>
                    <td>
                        <Input
                            min={0}
                            max={1}
                            step={0.1}
                            type='number'
                            fluid
                            onChange={(e) => setAlpha(Number(e.target.value))}
                        />
                    </td>
                </tr>
            ),
        },
        light: {
            value: light,
            setStateAction: setLight,
            component: (
                <tr key='light'>
                    <td>light</td>
                    <td>
                        <Switch
                            size='xs'
                            checked={light}
                            onChange={(e) => setLight(e.target.checked)}
                        />
                    </td>
                </tr>
            ),
        },
        fluid: {
            value: fluid,
            setStateAction: setFluid,
            component: (
                <tr key='fluid'>
                    <td>fluid</td>
                    <td>
                        <Switch
                            size='xs'
                            checked={fluid}
                            onChange={(e) => setFluid(e.target.checked)}
                        />
                    </td>
                </tr>
            ),
        },
        icon: {
            value: icon,
            setStateAction: setIcon,
            component: (
                <tr key='icon'>
                    <td>icon</td>
                    <td>
                        <Switch
                            size='xs'
                            checked={icon}
                            onChange={(e) => setIcon(e.target.checked)}
                        />
                    </td>
                </tr>
            ),
        },
        shadowed: {
            value: shadowed,
            setStateAction: setShadowed,
            component: (
                <tr key='shadowed'>
                    <td>shadowed</td>
                    <td>
                        <Switch
                            size='xs'
                            checked={shadowed}
                            onChange={(e) => setShadowed(e.target.checked)}
                        />
                    </td>
                </tr>
            ),
        },
        frosted: {
            value: frosted,
            setStateAction: setFrosted,
            component: (
                <tr key='frosted'>
                    <td>frosted</td>
                    <td>
                        <Switch
                            size='xs'
                            checked={frosted}
                            onChange={(e) => setFrosted(e.target.checked)}
                        />
                    </td>
                </tr>
            ),
        },
        selected: {
            value: selected,
            setStateAction: setSelected,
            component: (
                <tr key='selected'>
                    <td>selected</td>
                    <td>
                        <Switch
                            size='xs'
                            checked={selected}
                            onChange={(e) => setSelected(e.target.checked)}
                        />
                    </td>
                </tr>
            ),
        },
        disabled: {
            value: disabled,
            setStateAction: setDisabled,
            component: (
                <tr key='disabled'>
                    <td>disabled</td>
                    <td>
                        <Switch
                            size='xs'
                            checked={disabled}
                            onChange={(e) => setDisabled(e.target.checked)}
                        />
                    </td>
                </tr>
            ),
        },
    }
}
