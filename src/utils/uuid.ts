let currentId = 0;

export function generateUniqueId() {
    currentId += 1;
    return `id_${currentId}`;
}
