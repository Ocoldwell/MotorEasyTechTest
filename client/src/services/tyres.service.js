

export const getTyres = () => {
 return fetch("/api/tyres")
      .then((res) => res.json())
      .then((data) => (data));
}

export const getBrands = () => {
  return fetch("/api/brands")
    .then((res) => res.json())
    .then((data) => (data))
}