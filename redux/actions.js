import { addXe, setXe, deleteXe, updateXe } from "./reducer";

const api_url = 'http://10.0.2.2:3000/XeMay';

export const fetchXe = () => {
    return async dispatch => {
        try {
            const res = await fetch(api_url);
            const data = await res.json();
            dispatch(setXe(data));
        } catch (error) {
            console.error('Lỗi lấy danh sách:', error);
        }
    };
};

// Thêm và xóa xe
export const addXeToAPI = (xe) => {
    return async dispatch => {
        try {
            const res = await fetch(api_url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(xe),
            });
            const data = await res.json();
            dispatch(addXe(data));
        } catch (error) {
            console.error('Lỗi thêm xe:', error);
        }
    };
};

export const deleteXeFromAPI = (xe) => {
    return async dispatch => {
        try {
            const res = await fetch(`${api_url}/${xe.id}`, { method: 'DELETE' });
            if (res.ok) {
                dispatch(deleteXe(xe.id)); // Gửi id
            } else {
                console.warn('Xóa thất bại với mã:', res.status);
            }
        } catch (error) {
            console.error('Lỗi xóa xe:', error);
        }
    };
};


export const updateXeInAPI = (xe) => {
    return async dispatch => {
        try {
            await fetch(`${api_url}/${xe.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(xe),
            });
            dispatch(updateXe(xe));
        } catch (error) {
            console.error('Lỗi cập nhật xe:', error);
        }
    };
};