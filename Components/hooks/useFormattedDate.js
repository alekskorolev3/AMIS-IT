import { useState, useEffect } from "react";

const useFormattedDate = (date) => {
    const [formattedDate, setFormattedDate] = useState(null);

    useEffect(
        () => setFormattedDate(new Date(date.slice(0, 10)).toLocaleString('ru',
            {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            }
        )),
        []
    );

    return formattedDate;
};

export default useFormattedDate;
