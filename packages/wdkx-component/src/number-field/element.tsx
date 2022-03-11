import { FieldMessage, StyledElement } from '../common'
import { NumberFieldProps } from './types'
import { StyledNumberField, StyledNumberFieldContainer } from './styled'
import React from 'react'

function Minus() {
    return (
        <svg
            width='100%'
            height='100%'
            viewBox='0 0 16 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path d='M0 8H16' stroke='currentColor' strokeLinejoin='round' />
        </svg>
    )
}

function Plus() {
    return (
        <svg
            width='100%'
            height='100%'
            viewBox='0 0 16 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M0 8H16M8 0V16'
                stroke='currentColor'
                strokeLinejoin='round'
            />
        </svg>
    )
}

// 按住 加/减 按钮或 键盘 时使用的计时器
let interval: NodeJS.Timeout
let timeout: NodeJS.Timeout

export default function ({
    className,
    style,
    color,
    size,
    radius,
    fluid,
    label,
    step = 1,
    message,
    shadowed,
    shadowOnInteract,
    disabled,
    plusDisabled,
    minusDisabled,
    ...rest
}: NumberFieldProps) {
    const ref = React.createRef<HTMLInputElement>()
    // 按下 加 按钮
    const onPlusPress = () => {
        //延时200毫秒后开始操作
        timeout = setTimeout(
            // 加法计算 每次延时50毫秒
            () => (interval = setInterval(computePlus, 50)),
            200
        )
    }

    // 按下 减 按钮
    const onMinusPress = () => {
        //延时200毫秒后开始操作
        timeout = setTimeout(
            // 减法计算 每次延时50毫秒
            () => (interval = setInterval(computeMinus, 50)),
            200
        )
    }

    // 减法计算
    const computeMinus = () => {
        // 判断输入框中是否为有效的数字
        if (!isNaN(Number(ref.current!.value))) {
            // 先把从input中取到的值转换为number然后计算结果，再把结果转为string
            ref.current!.value = String(Number(ref.current!.value) - step)
        }
    }

    // 加法计算
    const computePlus = () => {
        // 判断输入框中是否为有效的数字
        if (!isNaN(Number(ref.current!.value))) {
            // 先把从input中取到的值转换为number然后计算结果，再把结果转为string
            ref.current!.value = String(Number(ref.current!.value) + step)
        }
    }
    return (
        <StyledNumberFieldContainer fluid={fluid}>
            <StyledNumberField
                color={color}
                size={size}
                radius={radius}
                shadowed={shadowed}
                shadowOnInteract={shadowOnInteract}
                className={className}
                disabled={disabled}
                style={style}
            >
                <StyledElement>
                    <button
                        onClick={() => computeMinus()} //点击时执行减法运算
                        onMouseDown={() => onMinusPress()} //按钮被按下时执行连续减法运算
                        onMouseUp={() => {
                            // 松开鼠标清除计时器
                            clearInterval(interval)
                            clearTimeout(timeout)
                        }}
                        disabled={disabled || minusDisabled}
                    >
                        <Minus />
                    </button>
                </StyledElement>
                <div aria-label='text-field-instance'>
                    {label && <div aria-label='text-field-label'>{label}</div>}
                    <input
                        ref={ref}
                        step={step}
                        type='number'
                        disabled={disabled}
                        {...rest}
                    />
                </div>
                <StyledElement>
                    <button
                        onClick={() => computePlus()} //点击时执行加法运算
                        onMouseDown={() => onPlusPress()} //按钮被按下时执行连续加法运算
                        onMouseUp={() => {
                            // 松开鼠标清除计时器
                            clearInterval(interval)
                            clearTimeout(timeout)
                        }}
                        disabled={disabled || plusDisabled}
                    >
                        <Plus />
                    </button>
                </StyledElement>
            </StyledNumberField>
            {message && (
                <FieldMessage color={color} disabled={disabled}>
                    {message}
                </FieldMessage>
            )}
        </StyledNumberFieldContainer>
    )
}
