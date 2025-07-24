export function generateRandomArray(length = 100, min = 0.1, max = 10) {
    const arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return arr;
}


export async function bubbleSort(a, delay = 1) {
    let changed = false
    do {
        changed = false;
        for (let j = a.length - 1; j > 0; j--) {
            for (let i = 0; i < j; i++) {
                if (a[i] < a[i + 1]) {
                    const b = a[i]
                    a[i] = a[i + 1]
                    a[i + 1] = b;
                    changed = true;
                }
            }
        }
    } while (changed);
}

export async function selectionSort(a, delay = 1) {
    let p = 0;
    while (p < a.length) {
        let b = {
            i: p,
            v: a[p],
        };
        for (let n = p; n < a.length + 1; n++) {
            if (b.v > a[n]) {
                b.v = a[n]
                b.i = n
            }
        }
        const f = a[p]
        a[p] = b.v
        a[b.i] = f
        p++
    }
}

export async function insertionSort(a, delay = 1) {
    for (let i = 1; i < a.length; i++) {
        let current = a[i];
        let j;
        for (j = i - 1; j >= 0 && a[j] > current; j--) {
            a[j + 1] = a[j];
        }
        a[j + 1] = current;
    }
}


export function quickSort(a) {
    if (a.length <= 1) {
        return a;
    }
    const m = Math.floor(a.length / 2);
    const p = a[m];
    const l = [];
    const r = [];

    let n = 0;
    for (const i of a) {
        n++;
        if (n===m) continue;
        i < p? l.push(i): r.push(i);
    }
    return [
        ...quickSort(l),
        p,
        ...quickSort(r)
    ];
}