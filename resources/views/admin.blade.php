@extends('layouts.app')

@section('content')
  <pagina-v tamanho="10">
    <painel-v titulo="Dashboard">
      <migalha-v v-bind:lista="{{$listaMigalhas}}"></migalha-v>

      <div class="row">
        @can('autor')
          <div class="col-md-4">
            <caixa-v qtd="{{$artigos}}" titulo="Artigos" url="{{route('artigos.index')}}" cor="orange" icone="ion ion-pie-graph"></caixa-v>
          </div>
        @endcan
        @can('eAdmin')
          <div class="col-md-4">
            <caixa-v qtd="{{$usuarios}}" titulo="Usuários" url="{{route('usuarios.index')}}" cor="blue" icone="ion ion-person-stalker"></caixa-v>
          </div>
          <div class="col-md-4">
            <caixa-v qtd="{{$autores}}" titulo="Autores" url="{{route('autores.index')}}" cor="red" icone="ion ion-person"></caixa-v>
          </div>
          <div class="col-md-4">
            <caixa-v qtd="{{$admin}}" titulo="Admin" url="{{route('adm.index')}}" cor="green" icone="ion ion-person"></caixa-v>
          </div>
        @endcan

      </div>
    </painel-v>

  </pagina-v>
@endsection
