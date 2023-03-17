//Switch

const metodoPago = 'tarjeta';

switch (metodoPago) {
    case 'tarjeta':
        console.log('Se pago con tarjeta');
        break;
    case 'efectivo':
        console.log('Se pago con efectivo');
        break;
    case 'bitcoin':
        console.log('Se pago con bitcoin');
        break;
}