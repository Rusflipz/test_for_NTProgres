import { createSlice } from '@reduxjs/toolkit';

//Интерфейс для типизирования хранилища
interface CounterState {
    connectionLoading: boolean;
    connectionError: boolean;
    connectionSuccess: boolean;
    dataSuccess: boolean;
    data: Array<any> | null;
    data1: any
}

//хранилище значений
export const initialState: CounterState = {
    connectionLoading: false,
    connectionError: false,
    connectionSuccess: false,
    dataSuccess: false,
    //Сюда бы записывались данные с back-end
    data: null,
    //Тестовые данные, т.к. нет back-end части
    data1: {
        rateSell: {
            "CHY/RUB": 10.69,
            "EUR/RUB": 78.05,
            "USD/RUB": 72.79,
            "TRY/RUB": 3.87,
            "BYN/RUB": 26.31,
        }, rateBuy: {
            "CHY/RUB": 10.50,
            "EUR/RUB": 74.95,
            "USD/RUB": 72.59,
            "TRY/RUB": 3.67,
            "BYN/RUB": 26.21,
        }, listOfOrders: [{
            id: 1,
            CreationTime: "1-01-2011 02:03:04.567",
            ChangeTime: "1-01-2011 02:03:04.567",
            Status: "Active",
            Side: "BUY",
            Price: 10.50,
            Amount: 10000,
            Instrument: "CHY/RUB"
        }]

    },
}

//Методы, котрые можно вызывать через dispatch, для изменения состояния хранилища
export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        //Запускает загрузку, использую для анимаций и своевременного отображения контента
        connecting: (state) => {
            state.connectionLoading = true
        },
        //Выключает анимацию загрузки, отрисовывает контент
        connectingSuccess: (state) => {
            state.connectionLoading = false
            state.connectionSuccess = true
        },
        //Записывает данные в хранилище
        getDataSuccess: (state, { payload }) => {
            state.data = payload
            // state.data1 = payload.orders
            state.dataSuccess = true
            state.connectionLoading = false
            state.connectionSuccess = true
        },
        //Выводит ошибку
        ConnectingFail: (state) => {
            state.connectionLoading = false
            state.connectionSuccess = false
            state.dataSuccess = false
            state.connectionError = true
        },

    }
})


export const {
    connecting, connectingSuccess, getDataSuccess, ConnectingFail,
} = dataSlice.actions

export const dataSelector = (state: { data: any; }) => state.data

export default dataSlice.reducer