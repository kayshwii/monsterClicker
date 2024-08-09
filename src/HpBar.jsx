const HpBar = ({hpMax = 100, hp = 100}) => {
    const currentHealth = (hp / hpMax) * 100
    return(
        <>
        <div className = 'barBackground'>
            <div className='maxHealth'>
                <div className='currentHealth'
                style={{width: `${currentHealth}%`}}>
                </div>
            </div>
            <div style={{position: 'absolute'}}>
                {hp} / {hpMax}
            </div>
        </div>
        
        </>
    )
}

export default HpBar