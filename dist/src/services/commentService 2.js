"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentService = void 0;
const data_source_1 = require("../data-source");
const comments_1 = require("../model/comments");
class CommentService {
    constructor() {
        this.getAllComment = () => {
            return this.commentService.find();
        };
        this.createComment = (comment) => {
            return this.commentService.save(comment);
        };
        this.updateComment = (id, newComment) => {
            return this.commentService.update({ id: id }, newComment);
        };
        this.deleteComment = (id) => {
            return this.commentService.delete({ id: id });
        };
        data_source_1.AppDataSource.initialize().then(() => {
            this.commentService = data_source_1.AppDataSource.getRepository(comments_1.Comment);
        });
    }
}
exports.CommentService = CommentService;
//# sourceMappingURL=commentService.js.map