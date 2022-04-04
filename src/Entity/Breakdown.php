<?php

namespace App\Entity;

use App\Repository\BreakdownRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=BreakdownRepository::class)
 */
class Breakdown
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="datetime")
     */
    private $breakdownDate;

    /**
     * @ORM\Column(type="text")
     */
    private $description;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $created;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $updated;

    /**
     * @ORM\ManyToOne(targetEntity=Equipment::class, inversedBy="breakdowns")
     */
    private $equipment;

    /**
     * @ORM\OneToOne(targetEntity=Maintenance::class, mappedBy="breakdown", cascade={"persist", "remove"})
     */
    private $maintenance;


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getBreakdownDate(): ?\DateTimeInterface
    {
        return $this->breakdownDate;
    }

    public function setBreakdownDate(\DateTimeInterface $breakdownDate): self
    {
        $this->breakdownDate = $breakdownDate;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getCreated(): ?\DateTimeInterface
    {
        return $this->created;
    }

    public function setCreated(?\DateTimeInterface $created): self
    {
        $this->created = $created;

        return $this;
    }

    public function getUpdated(): ?\DateTimeInterface
    {
        return $this->updated;
    }

    public function setUpdated(?\DateTimeInterface $updated): self
    {
        $this->updated = $updated;

        return $this;
    }

    /**
     * @ORM\PrePersist
     */
    public function onPrePersist()
    {
        $this->updated = new \DateTime();
    }

    public function getEquipment(): ?Equipment
    {
        return $this->equipment;
    }

    public function setEquipment(?Equipment $equipment): self
    {
        $this->equipment = $equipment;

        return $this;
    }

    public function getMaintenance(): ?Maintenance
    {
        return $this->maintenance;
    }

    public function setMaintenance(?Maintenance $maintenance): self
    {
        // unset the owning side of the relation if necessary
        if ($maintenance === null && $this->maintenance !== null) {
            $this->maintenance->setBreakdown(null);
        }

        // set the owning side of the relation if necessary
        if ($maintenance !== null && $maintenance->getBreakdown() !== $this) {
            $maintenance->setBreakdown($this);
        }

        $this->maintenance = $maintenance;

        return $this;
    }

}
