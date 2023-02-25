"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentController = void 0;
const commentService_1 = require("../services/commentService");
class CommentController {
    constructor() {
        this.getAllComment = async (req, res) => {
            let allComment = await this.commentService.getAllComment();
            res.status(200).json({
                allComment: allComment
            });
        };
        this.createComment = async (req, res) => {
            let commentInfo = req.body;
            let newComment = await this.commentService.createComment(commentInfo);
            res.status(200).json({
                mess: `Create Comment ${req.body.comment} success`,
                commentInfo: newComment
            });
        };
        this.updateComment = async (req, res) => {
            let id = req.params.id;
            let commentInfo = req.body;
            await this.commentService.updateComment(id, commentInfo);
            res.status(200).json({
                mess: `Update comment number ${id} success`,
                updateInfo: req.body.comment
            });
        };
        this.deleteComment = async (req, res) => {
            let id = req.params.id;
            await this.commentService.deleteComment(id);
            res.status(200).json({
                mess: `Delete comment number ${id} success`
            });
        };
        this.commentService = new commentService_1.CommentService();
    }
}
exports.CommentController = CommentController;
exports.default = new CommentController();
//# sourceMappingURL=commentController.js.map