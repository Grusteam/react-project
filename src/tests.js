
export const promises = () => {
    const p = Promise.resolve('resolvePurpose')
        .then(
            then1 => Promise.reject('then1RejectPurpose')
                .then(then2 => { console.log('then2', then2); return then2; })
                .catch(catch1 => { console.log('catch1', catch1); return catch1; })
        )
        .catch(catch2 => { console.log('catch2', catch2); return catch2; })
        .then(then3 => { console.log('then3', then3); return then3; })
        .then(then4 => { console.log('then4', then4); return then4; })
        .catch(catch3 => { console.log('catch3', catch3); return catch3; })

    console.log('p', p);
}