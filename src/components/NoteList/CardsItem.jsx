
function CardsItem({color ,selected ,title ,description ,date ,onClick}) {
    const style={
        borderColor: color,
        backgroundColor: selected ? "white" : "#fcf1e3",
    };
    return (
        <div className="card-note" style={style} onClick={onClick}>
            <h5 className='title-card'>{title}</h5>
          <div className='descrip'>
            <h6 className='descrip-mtn'>{description}</h6>
            <h6 className='year'>{date}</h6>
            </div>
        </div>
    );
}

export default CardsItem;