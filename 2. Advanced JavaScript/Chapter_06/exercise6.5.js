let value = "1000";

(
    () => {
        value = "500";
        console.log(value);
    }
)();