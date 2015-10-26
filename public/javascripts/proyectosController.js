/**
 * Created by fverdaguer on 26/10/2015.
 */

var aplicacion = angular.module('musicmate', []);
aplicacion.controller('Proyectos', function($scope) {
    $scope._id = null;
    $scope.titulo = '';
    $scope.soundcloudUrl = ''
    $scope.youtubeUrl = '';
    $scope.facebookUrl = '';
    $scope.generos = [];
    $scope.instrumentos = [];
    $scope.proyectos = [];

    $scope.saveProyecto = function() {
        alert($scope.titulo);
        if ($scope._id == null) {
            $scope.proyectos.push({
                titulo: $scope.titulo,
                soundcloudUrl: $scope.soundcloudUrl,
                youtubeUrl: $scope.youtubeUrl,
                facebookUrl: $scope.facebookUrl,
                generos: $scope.generos,
                instrumentos: $scope.instrumentos
            });
        } else {
            $scope.proyectos[$scope._id] = {
                titulo: $scope.titulo,
                soundcloudUrl: $scope.soundcloudUrl,
                youtubeUrl: $scope.youtubeUrl,
                facebookUrl: $scope.facebookUrl,
                generos: $scope.generos,
                instrumentos: $scope.instrumentos
            };
        }
        $scope.clear();
        $('#myModal').modal('hide');
    }
    $scope.getProyecto = function(index) {
        $scope._id = index;
        $scope.titulo = $scope.proyectos[index].titulo;
        $scope.soundcloudUrl = $scope.proyectos[index].soundcloudUrl;
        $scope.youtubeUrl = $scope.proyectos[index].youtubeUrl;
        $scope.facebookUrl = $scope.proyectos[index].facebookUrl;
        $scope.generos = $scope.proyectos[index].generos;
        $scope.instrumentos = $scope.proyectos[index].instrumentos;
    };
    $scope.removeProyecto = function(indice) {
        var proyectos_actualizado = [];
        for (var i = 0; i < $scope.proyectos.length; i++) {
            if (i != indice) {
                proyectos_actualizado.push($scope.proyectos[i]);
            }
        }
        $scope.proyectos = proyectos_actualizado;
    };
    $scope.clear = function() {
        $scope._id = null;
        $scope.titulo = '';
        $scope.soundcloudUrl = '';
        $scope.youtubeUrl = '';
        $scope.facebookUrl = '';
        $scope.generos = '';
        $scope.instrumentos = '';
    };
});