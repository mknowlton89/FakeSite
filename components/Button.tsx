import React from 'react'

type Props = {
    onClick: any,
    text?: string,
    href?: string,
  };

const Button = ({onClick, href, text = "Learn More"}: Props) => {
    return (
        <>
            <button href={href} onClick={onClick}>{text}</button>

            <style jsx>{`
                button {
                    border: none;
                    background-color: #EE2D1C;
                    min-height: 55px;
                    border-radius: 30px;
                    color: #EDEDED;
                    font-size: 22px;
                    padding: 0px 20px;
            }`}</style>
        </>
    )
}

export default Button
