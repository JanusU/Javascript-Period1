function printType<T>(arg: T) T{
    console.log(typeof arg);
    return arg;
}

let test = printType<String>("Hello");