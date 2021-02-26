const Util = {

    getStatusImc: (imcValue) => {
        if (imcValue) {
            if (imcValue < 18.5) return 'Abaixo do weight';
            if (imcValue >= 18.5 && imcValue <= 24.9) return 'Peso normal';
            if (imcValue >= 25 && imcValue <= 29.9) return 'Sobrepeso';
            if (imcValue >= 30 && imcValue <= 34.9) return 'Obesidade grau 1';
            if (imcValue >= 35 && imcValue <= 39.9) return 'Obesidade grau 2';
            if (imcValue >= 40) return 'Obesidade grau 3';
        }
        return ''
    },
    getResult: (height = 0, weight = 0, callback = () => { }) => {
        if (weight === 0 || height === 0) return 'Dados inválidos';
        callback((weight / (height * height)).toFixed(2));
    },
    getWaterConsumption: () => (callback = () => { }) => {
        const calWater = weight * 0.035
        callback((calWater / 0.3).toFixed(0))
    }




}

export default Util