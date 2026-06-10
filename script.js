function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
}

const lookbookData = [
//men
    { category: 'Casual', img: 'https://in.pinterest.com/pin/957014989569538215/'},
    { category: 'Casual', img: 'https://plus.unsplash.com/premium_photo-1690366910345-5807bf328585?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNhc3VhbCUyMHdlYXJ8ZW58MHx8MHx8fDA%3D' },
    { category: 'Casual', img: 'https://images.unsplash.com/photo-1697319452360-ee47502e39f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhc3VhbCUyMHdlYXIlMjBtZW58ZW58MHx8MHx8fDA%3D'},
    { category: 'Casual', img: 'https://images.unsplash.com/photo-1634136912882-61fd36144a3a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGNhc3VhbCUyMHdlYXJ8ZW58MHx8MHx8fDA%3D' },
    { category: 'Casual', img: 'https://images.unsplash.com/photo-1715409352632-7d77749a3edd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fGNhc3VhbCUyMHdlYXJ8ZW58MHx8MHx8fDA%3D' },

    { category: 'Casual', img: 'https://images.unsplash.com/photo-1696238247528-fd9ee1aae567?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhc3VhbCUyMHdlYXJ8ZW58MHx8MHx8fDA%3D'  },
    { category: 'Casual', img: 'https://images.unsplash.com/photo-1619216910014-1fdb7a8e98e9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhc3VhbCUyMHdlYXJ8ZW58MHx8MHx8fDA%3D' },
    { category: 'Casual', img: 'https://images.unsplash.com/photo-1558467611-fce8b45428d3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D' },
    { category: 'Casual', img: 'https://images.unsplash.com/photo-1623098786420-50d7bbcdeb01?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI4fHx8ZW58MHx8fHx8' },
    { category: 'Casual', img: 'https://images.unsplash.com/photo-1752047763162-0436d0521ea3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIyfHx8ZW58MHx8fHx8' },

//men
    { category: 'Formal', img: 'https://plus.unsplash.com/premium_photo-1661425828618-f48a8beb4f6c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9ybWFsJTIwd2VhcnxlbnwwfHwwfHx8MA%3D%3D' },
    { category: 'Formal', img: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9ybWFsJTIwd2VhciUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D' },
    { category: 'Formal', img: 'https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zm9ybWFsJTIwd2VhciUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D' },
    { category: 'Formal', img: 'https://images.unsplash.com/photo-1618001789159-ffffe6f96ef2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZvcm1hbCUyMHdlYXIlMjBtZW58ZW58MHx8MHx8fDA%3D' },
    { category: 'Formal', img: 'https://images.unsplash.com/photo-1679101893304-045625840a94?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGZvcm1hbCUyMHdlYXIlMjBtZW58ZW58MHx8MHx8fDA%3D' },



//men
    { category: 'Ethnic', img: 'https://plus.unsplash.com/premium_photo-1691030256404-101d1aadd42c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGV0aG5pYyUyMHdlYXIlMjBtZW58ZW58MHx8MHx8fDA%3D' },
    { category: 'Ethnic', img: 'https://plus.unsplash.com/premium_photo-1682090784102-b5e9fc3fb3bb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGV0aG5pYyUyMHdlYXIlMjBtZW58ZW58MHx8MHx8fDA%3D' },
    { category: 'Ethnic', img: 'https://images.unsplash.com/photo-1657367144068-935d1d9e5e15?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8' },
    { category: 'Ethnic', img: 'https://images.unsplash.com/photo-1744536915179-4d672baf3176?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8' },
    { category: 'Ethnic', img: 'https://images.unsplash.com/photo-1767775498862-d4740ce574ce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRyYWRpdGlvbmFsJTIwd2VhciUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D' },
//women
    { category: 'Ethnic', img: 'https://images.unsplash.com/photo-1612595391900-29390866733a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5kaWFuJTIwdHJhZGl0aW9uYWwlMjB3ZWFyJTIwd29tZW58ZW58MHx8MHx8fDA%3D' },
    { category: 'Ethnic', img: 'https://images.unsplash.com/photo-1708534246055-d7b149acb731?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW5kaWFuJTIwd2VhciUyMHdvbWVufGVufDB8fDB8fHww' },
    { category: 'Ethnic', img: 'https://images.unsplash.com/photo-1583391733981-8b530b760347?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGluZGlhbiUyMHdlYXIlMjB3b21lbnxlbnwwfHwwfHx8MA%3D%3D' },
    { category: 'Ethnic', img: 'https://images.unsplash.com/photo-1768289222318-fd35f29a8403?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D' },
    { category: 'Ethnic', img: 'https://images.unsplash.com/photo-1612273882633-9416493e1914?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTl8fHNhcmVlfGVufDB8fDB8fHww' },
    { category: 'Ethnic', img: 'https://images.unsplash.com/photo-1756483509254-3cc48a5a15b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fHBhcnR5JTIwd2VhciUyMHdvbWVufGVufDB8fDB8fHww' },


//men
    { category: 'Vacation', img: 'https://images.unsplash.com/photo-1707765644061-105d0755cf85?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1lbiUyMHZhY2F0aW9uJTIwd2VhcnxlbnwwfHwwfHx8MA%3D%3D' },
    { category: 'Vacation', img: 'https://images.unsplash.com/photo-1710423914146-dfd361a169c0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1lbiUyMHZhY2F0aW9uJTIwd2VhcnxlbnwwfHwwfHx8MA%3D%3D' },
    { category: 'Vacation', img: 'https://images.unsplash.com/photo-1533690722797-a8b7aa2a2e8e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1lbiUyMHZhY2F0aW9uJTIwd2VhcnxlbnwwfHwwfHx8MA%3D%3D' },
    { category: 'Vacation', img: 'https://images.unsplash.com/photo-1707765644061-105d0755cf85?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1lbiUyMHZhY2F0aW9uJTIwd2VhcnxlbnwwfHwwfHx8MA%3D%3D' },
    { category: 'Vacation', img: 'https://images.unsplash.com/photo-1628336706955-ac134f011457?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1lbiUyMHZhY2F0aW9uJTIwd2VhcnxlbnwwfHwwfHx8MA%3D%3D' },
 //women
    { category: 'Vacation', img: 'https://images.unsplash.com/photo-1763558958792-85731d9b60f4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHdvbWVuJTIwdmFjYXRpb24lMjB3ZWFyfGVufDB8fDB8fHww' },
    { category: 'Vacation', img: 'https://images.unsplash.com/photo-1582738509941-360b28c941ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW4lMjB2YWNhdGlvbiUyMHdlYXJ8ZW58MHx8MHx8fDA%3D' },
    { category: 'Vacation', img: 'https://images.unsplash.com/photo-1685635963101-c03e98f4eeb3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTExfHx3b21lbiUyMHZhY2F0aW9uJTIwd2VhcnxlbnwwfHwwfHx8MA%3D%3D' },
    { category: 'Vacation', img: 'https://images.unsplash.com/photo-1728487237980-197c8904811b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fG9uZSUyMHBpZWNlJTIwZHJlc3N8ZW58MHx8MHx8fDA%3D' },
    { category: 'Vacation', img: 'https://images.unsplash.com/photo-1661456587826-df03ddcda205?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fG9uZSUyMHBpZWNlJTIwZHJlc3N8ZW58MHx8MHx8fDA%3D' },


//men
    { category: 'Party', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAxWoCHK66LHlADSxsvNVMYOf8FYqNDClJFQ&s' },
    { category: 'Party', img: 'https://images.unsplash.com/photo-1741709846033-67a45021fcb2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1lbiUyMHBhcnR5JTIwb3V0Zml0fGVufDB8fDB8fHww' },
    { category: 'Party', img: '' },
    { category: 'Party', img: '' },
    { category: 'Party', img: '' },
//women
    { category: 'Party', img: 'https://images.unsplash.com/photo-1741816219785-a642b0ad30b8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D' },
    { category: 'Party', img: 'https://images.unsplash.com/photo-1765229277457-dd2f9f259f17?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D' },
    { category: 'Party', img: 'https://plus.unsplash.com/premium_photo-1674069718749-568858f6817d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM2fHx8ZW58MHx8fHx8' },
    { category: 'Party', img: 'https://images.unsplash.com/photo-1704775989614-8435994e4e97?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D' },
    { category: 'Party', img: 'https://images.unsplash.com/photo-1562098599-7c6a2c9547d5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI2fHxwYXJ0eSUyMHdlYXIlMjB3b21lbnxlbnwwfHwwfHx8MA%3D%3D' },
];

function filterLookbook(category) {
    showPage('lookbook');
    const gallery = document.getElementById('gallery');
    document.getElementById('gallery-title').innerText = `${category} Collection`;
    
    gallery.innerHTML = '';
    const filtered = lookbookData.filter(item => item.category === category);
    
    filtered.forEach(item => {
        const imgDiv = document.createElement('div');
        imgDiv.className = 'cat-card';
        imgDiv.innerHTML = `<img src="${item.img}" style="width:100%; height:100%; object-fit:cover;">`;
        gallery.appendChild(imgDiv);
    });
}

