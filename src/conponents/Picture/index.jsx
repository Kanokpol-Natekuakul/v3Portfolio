const Picture = ({ picture, title }) => {
    if (!picture)
        return null;

    return (
        <div>
            <img src={picture} alt={title} className="w-full sm:w-5/6 max-w-full h-auto rounded-md border-2 border-primarySubcontent" />
        </div>
    )
}

export default Picture;