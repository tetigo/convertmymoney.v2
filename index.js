<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>ConvertMyMoney</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="estilos.css">
    </head>
    <body>
    <div class="container">
        <div><a href="index.js"><img src="logo.png" alt="Convert My Money" class="img-responsive"></a></div>
        <h1>Dólar pra Real v2</h1>
        <form method="get" action="cotacao.js">
        <!-- <form> -->
            <div class="form-group">
                <input id="cota" class="form-control-lg" name="cotacao" type="text" placeholder="Cotação do Dólar"  required >
            </div>
            
            <div class="form-group">
                <input id="qtd" class="form-control-lg" name="qtd" type="text" placeholder="Qtd de Dólares" required >
            </div>
            
            <div class="form-group">
                <button id="btn" class="btn btn-primary btn-lg">Convert</button>
            </div>
        </form>

    
    <script src="https://code.jquery.com/jquery-3.4.1.js" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <script>
        $(function(){
            $.get("https://economia.awesomeapi.com.br/all/USD-BRL", function(result){
                const valor = result['USD']['low']
                console.log(valor)
                const input = $('#cota')
                input.val(valor)
           }) 
        })
    </script>
</div>
</body>
</html>
