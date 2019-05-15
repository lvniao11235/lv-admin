function _clone(obj){
    return JSON.parse(JSON.stringify(obj));
}

const clone = _clone;

function equalAddr(addr1, addr2){
    if(addr1 == addr2) return true;
    if(addr1.indexOf(":") > -1){
        var prefix1 = addr1.substr(0, addr1.lastIndexOf("/"));
        var prefix2 = addr2.substr(0, addr2.lastIndexOf("/"));
        return prefix1 == prefix2;
    }
    if(addr1.indexOf("?") > -1 && addr2.contains("?") > -1){
        prefix1 = addr1.substr(0, addr1.lastIndexOf("?"));
        prefix2 = addr2.substr(0, addr2.lastIndexOf("?"));
        return prefix1 == prefix2;
    }
    return false;
}

function _findMenuItemByAddr(menus, addr){
    for(var i=0; i<menus.length; i++){
        if(menus[i].addr && equalAddr(menus[i].addr, addr)){
            return menus[i];
        } else if (menus[i].items && menus[i].items.length > 0){
            var res = findMenuItemByAddr(menus[i].items, addr);
            if(res){
                return res;
            }
        }
    }
    return null;
}

const findMenuItemByAddr = _findMenuItemByAddr;

function _findLinkByAddr(links, addr){
    for(var i=0; i<links.length; i++){
        if(equalAddr(links[i].addr, addr)){
            return links[i];
        }
    }
    return null;
}

const findLinkByAddr = _findLinkByAddr;

export {findMenuItemByAddr, findLinkByAddr, clone};