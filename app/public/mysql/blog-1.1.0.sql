/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 80027
 Source Host           : localhost:3306
 Source Schema         : blog

 Target Server Type    : MySQL
 Target Server Version : 80027
 File Encoding         : 65001

 Date: 17/01/2022 00:03:01
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for article
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '文章编号',
  `typeId` int DEFAULT NULL COMMENT '文章类型编号',
  `title` varchar(255) DEFAULT NULL COMMENT '文章标题',
  `content` text CHARACTER SET utf8 COLLATE utf8_general_ci COMMENT '文章内容',
  `introduce` text COMMENT '文章介绍',
  `created` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '文章发布时间',
  `viewCount` int(10) unsigned zerofill DEFAULT NULL COMMENT '文章浏览次数',
  `isDelete` tinyint(3) unsigned zerofill DEFAULT NULL COMMENT '文章逻辑删除',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Records of article
-- ----------------------------
BEGIN;
INSERT INTO `article` (`id`, `typeId`, `title`, `content`, `introduce`, `created`, `viewCount`, `isDelete`) VALUES (3, 3, 'nginx教学', '内容', '介绍', '2011-08-11 12:53:36', 0000000764, 000);
INSERT INTO `article` (`id`, `typeId`, `title`, `content`, `introduce`, `created`, `viewCount`, `isDelete`) VALUES (4, NULL, '标题', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `article` (`id`, `typeId`, `title`, `content`, `introduce`, `created`, `viewCount`, `isDelete`) VALUES (5, NULL, '标题1', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `article` (`id`, `typeId`, `title`, `content`, `introduce`, `created`, `viewCount`, `isDelete`) VALUES (6, NULL, '标题11', NULL, NULL, NULL, NULL, NULL);
COMMIT;

-- ----------------------------
-- Table structure for type
-- ----------------------------
DROP TABLE IF EXISTS `type`;
CREATE TABLE `type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `typeName` varchar(255) DEFAULT NULL,
  `orderNum` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Records of type
-- ----------------------------
BEGIN;
INSERT INTO `type` (`id`, `typeName`, `orderNum`) VALUES (1, '文章教程', 1);
COMMIT;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userName` varchar(255) DEFAULT NULL,
  `passWord` varchar(255) DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  `isDelete` tinyint DEFAULT NULL,
  `type` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Records of user
-- ----------------------------
BEGIN;
INSERT INTO `user` (`id`, `userName`, `passWord`, `created`, `isDelete`, `type`) VALUES (1, 'lisi', 'Aa123456', '2022-01-16 21:39:08', 0, 1);
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
