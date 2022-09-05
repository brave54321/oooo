const Monad = (value) => {
    // MONAD => FUNCTOR (MAP) + FLAT (FLATMAP)
    const map = (fn) => Monad(fn(value));
    const flatMap = (fn) => fn(value)

    return { map, flatMap }
}