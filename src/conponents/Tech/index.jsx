const Tech = ({ isHighLight, data }) => {
    return (
        <div>
            <div className="flex flex-wrap gap-2 text-sm">
                {
                    data.map((e, i) => (
                        <div key={`${e}-tech-${i}`} className={`bg-primarySubcontent px-2 py-1 rounded-md break-words`}>{e}</div>
                    ))
                }
            </div>
        </div>
    )
}

export default Tech;