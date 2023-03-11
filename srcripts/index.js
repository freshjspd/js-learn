// 1 обьект ROLE - admin, moderator, user: 'user',
// 2 обьект ACTION - create, read, update, delete

// создать карту MAP 

//функцию которая проверяет права доступа

// ***** класс User login, role

const ROLE = {
    ADMIN: 'ADMIN',
    MODERATOR: 'MODERATOR',
    USER: 'USER'
};

const ACTION = {
    CREATE: 'CREATE',
    READ: 'READ',
    UPDATE: 'UPDATE',
    DELETE: 'DELETE'
};

let mapRights = new Map();

mapRights.set(ROLE.USER, [ACTION.READ]);
mapRights.set(ROLE.MODERATOR, [ACTION.CREATE, ACTION.READ, ACTION.UPDATE]);
//mapRights.set(ROLE.ADMIN, [ACTION.CREATE, ACTION.READ, ACTION.UPDATE, ACTION.DELETE]);
mapRights.set(ROLE.ADMIN, ...ACTION);

function checkPermision(role, action){
    if(mapRights.has(role)){
        return mapRights.get(role).includes(action);
    }
    return false;
}