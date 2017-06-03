export function dumpProduct(product) {
    return {
        id          : product.id,
        name        : product.name,
        description : product.description,
        color       : product.color,
        createdAt   : product.createdAt
    };
}
