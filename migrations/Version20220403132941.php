<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220403132941 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE breakdown (id INT AUTO_INCREMENT NOT NULL, equipment_id INT DEFAULT NULL, breakdown_date DATETIME NOT NULL, description LONGTEXT NOT NULL, created DATETIME DEFAULT NULL, updated DATETIME DEFAULT NULL, INDEX IDX_B3969DA7517FE9FE (equipment_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE maintenance (id INT AUTO_INCREMENT NOT NULL, maintainer_id INT DEFAULT NULL, breakdown_id INT DEFAULT NULL, price INT DEFAULT NULL, created DATETIME DEFAULT NULL, updated DATETIME NOT NULL, date_start DATETIME DEFAULT NULL, date_end DATETIME DEFAULT NULL, description VARCHAR(255) DEFAULT NULL, INDEX IDX_2F84F8E985D19953 (maintainer_id), UNIQUE INDEX UNIQ_2F84F8E967F54C40 (breakdown_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE breakdown ADD CONSTRAINT FK_B3969DA7517FE9FE FOREIGN KEY (equipment_id) REFERENCES equipment (id)');
        $this->addSql('ALTER TABLE maintenance ADD CONSTRAINT FK_2F84F8E985D19953 FOREIGN KEY (maintainer_id) REFERENCES maintainer (id)');
        $this->addSql('ALTER TABLE maintenance ADD CONSTRAINT FK_2F84F8E967F54C40 FOREIGN KEY (breakdown_id) REFERENCES breakdown (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE maintenance DROP FOREIGN KEY FK_2F84F8E967F54C40');
        $this->addSql('DROP TABLE breakdown');
        $this->addSql('DROP TABLE maintenance');
    }
}
