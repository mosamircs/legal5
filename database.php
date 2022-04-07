<?php

class Database
{
    /**
     * configration 
     */
    private $host = "localhost";
    private $username = "legal";
    private $password  = "?6Ew3hs0";
    private $dbname = "legal";

    //holds the class instnce 
    private static $instance = null;

    //holds the connection
    private $connection;
    
    /**
     * creates the connecin to database 
     */
    private function __construct()
    {
        $this->connection = mysqli_connect($this->host,$this->username,$this->password,$this->dbname);
    }

    /**
     * validate that we have only one instance
     */
    public static function getInstance()
    {
        if (!self::$instance)//if instance not has a value  
        {
            self::$instance = new Database();
        }
        return self::$instance;
    }
    /**
     * return the connection 
     */
    public function getConnection()
    {
        return $this->connection;
    }
}