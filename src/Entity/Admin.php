<?php

namespace App\Entity;

use App\Repository\AdminRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Security\Core\User\UserInterface;
use Doctrine\Common\Collections\Collection;
use Symfony\Component\Uid\Uuid;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass=AdminRepository::class)
 * @ORM\HasLifecycleCallbacks
 * @UniqueEntity(fields={"firstname","lastname"},groups={"register"})
 * @UniqueEntity(fields={"username"},groups={"register"})
 * @UniqueEntity(fields={"contact"},groups={"register"})
 */
class Admin implements UserInterface
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=42, nullable=true)
     */
    private $ref;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\NotNull(groups={"register"})
     * @Assert\NotBlank(groups={"register"})
     */
    private $lastname;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\NotNull(groups={"register","update"})
     * @Assert\NotBlank(groups={"register","update"})
     */
    private $firstname;

    /**
     * @ORM\Column(type="string", length=32, nullable=true)
     */
    private $contact;

    /**
     * @ORM\Column(type="string", length=180, unique=true)
     * @Assert\NotNull(groups={"register","update"})
     * @Assert\NotBlank(groups={"register","update"})
     */
    private $username;


    /**
     * @ORM\Column(type="json")
     */
    private $roles = [];

    /**
     * @var string The hashed password
     * @ORM\Column(type="string")
     * @Assert\NotNull(groups={"register","update"})
     * @Assert\NotBlank(groups={"register","update"})
     */
    private $password;


    /**
     * @ORM\OneToMany(targetEntity=Directory::class, mappedBy="admin")
     */
    private $directories;

    /**
     * @ORM\Column(type="boolean", nullable=true,options={"default":true})
     */
    private $isActivated;

    /**
     * @ORM\ManyToOne(targetEntity=Files::class, inversedBy="admins")
     */
    private $image;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $created;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $updated;

    /**
     * @ORM\ManyToOne(targetEntity=WorkFunction::class, inversedBy="admins")
     */
    private $workFunction;

    /**
     * @ORM\ManyToOne(targetEntity=Service::class, inversedBy="admins")
     */
    private $service;

    /**
     * @ORM\OneToMany(targetEntity=Attribution::class, mappedBy="admin")
     */
    private $attributions;




    /**
     * @throws \Exception
     */
    public function __construct()
    {
        $this->created = new \DateTime();
        $this->updated = new \DateTime();
        $this->ref = Uuid::v4()->toRfc4122();
        $this->attributions = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUsername(): string
    {
        return (string)$this->username;
    }

    public function setUsername(string $username): self
    {
        $this->username = $username;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getPassword(): string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * Returning a salt is only needed, if you are not using a modern
     * hashing algorithm (e.g. bcrypt or sodium) in your security.yaml.
     *
     * @see UserInterface
     */
    public function getSalt(): ?string
    {
        return null;
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }

    public function getLastname(): ?string
    {
        return ucfirst($this->lastname);
    }

    public function setLastname(string $lastname): self
    {
        $this->lastname = $lastname;

        return $this;
    }

    public function getFirstname(): ?string
    {
        return ucfirst($this->firstname);
    }

    public function setFirstname(string $firstname): self
    {
        $this->firstname = $firstname;

        return $this;
    }

    public function getContact(): ?string
    {
        return $this->contact;
    }

    public function setContact(?string $contact): self
    {
        $this->contact = $contact;

        return $this;
    }


    /**
     * @return Collection|Directory[]
     */
    public function getDirectories(): Collection
    {
        return $this->directories;
    }

    public function addDirectory(Directory $directory): self
    {
        if (!$this->directories->contains($directory)) {
            $this->directories[] = $directory;
            $directory->setAdmin($this);
        }

        return $this;
    }

    public function removeDirectory(Directory $directory): self
    {
        if ($this->directories->removeElement($directory)) {
            // set the owning side to null (unless already changed)
            if ($directory->getAdmin() === $this) {
                $directory->setAdmin(null);
            }
        }

        return $this;
    }

    public function getIsActivated(): ?bool
    {
        return $this->isActivated;
    }

    public function setIsActivated(?bool $isActivated): self
    {
        $this->isActivated = $isActivated;

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

    public function getImage(): ?Files
    {
        return $this->image;
    }

    public function setImage(?Files $image): self
    {
        $this->image = $image;

        return $this;
    }

    public function getRef(): ?string
    {
        return $this->ref;
    }

    public function setRef(?string $ref): self
    {
        $this->ref = $ref;

        return $this;
    }

    /**
     * @ORM\PrePersist
     */
    public function onPrePersist()
    {
        $this->updated = new \DateTime();
    }

    public function getWorkFunction(): ?WorkFunction
    {
        return $this->workFunction;
    }

    public function setWorkFunction(?WorkFunction $workFunction): self
    {
        $this->workFunction = $workFunction;

        return $this;
    }

    public function getService(): ?Service
    {
        return $this->service;
    }

    public function setService(?Service $service): self
    {
        $this->service = $service;

        return $this;
    }

    /**
     * @return Collection<int, Attribution>
     */
    public function getAttributions(): Collection
    {
        return $this->attributions;
    }

    public function addAttribution(Attribution $attribution): self
    {
        if (!$this->attributions->contains($attribution)) {
            $this->attributions[] = $attribution;
            $attribution->setAdmin($this);
        }

        return $this;
    }

    public function removeAttribution(Attribution $attribution): self
    {
        if ($this->attributions->removeElement($attribution)) {
            // set the owning side to null (unless already changed)
            if ($attribution->getAdmin() === $this) {
                $attribution->setAdmin(null);
            }
        }

        return $this;
    }


}
