export default function SchedulePicture({ src, className, centerPercentage }) {

    return (
        <div className={`${className}`}>
            <img
                src={src}
                alt="powerkicks picture 1"
                className={`block h-full w-full object-cover object-[center_${centerPercentage}]`}
            />
        </div>
    );

}