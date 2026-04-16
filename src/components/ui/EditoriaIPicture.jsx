export default function EditorialPicture({ src, alt }) {
    return(
        <div
            className="w-full h-[550px] overflow-hidden"
        >
            <img
                src={src}
                alt={alt}
                className="block h-full w-full object-cover scale-125 translate-y-[6%]"
            />
        </div>
    )
}