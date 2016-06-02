angular.module('app.comments').directive('comment', function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl:'app/pages/comments/_comments.html',
        link: function(scope, element, attrs, fn) {
            scope.comments = scope.post.comments;
        },
        controller: function ($scope, $timeout, CommentService) {
            // $scope.vs = {};
            //
            // // ViewState Object
            // $scope.vs.form = false;
            // $scope.vs.comments = false;

            // $scope.addComment = function (postId, formComment) {
            //     var post = postsService.postById(postId);
            //     var commentCopy = angular.copy(formComment);
            //     post.comments.push(commentCopy);
            //     $scope.form.$setPristine();
            //     $scope.form.$setUntouched();
            //     $scope.comment = {};
            //     $scope.vs.form = false;
            //     $scope.vs.comments = true;
            };
        }
    };
});
